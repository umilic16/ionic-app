import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    getPlatforms,
    useIonAlert,
} from "@ionic/react";
import { scanOutline, stopCircleOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import "./QRCodeScan.css"

const QRCodeScan: React.FC = () => {
    const [err, setErr] = useState<string>()

    const [hideBg, setHideBg] = useState(false)

    const [present] = useIonAlert()

    const platforms = getPlatforms();
    const isWeb = (platforms.includes("desktop") || platforms.includes("mobileweb") || platforms.includes("pwa"))

    const startScan = async () => {
        // make background of WebView transparent
        BarcodeScanner.hideBackground()
        setHideBg(true)

        const result = await BarcodeScanner.startScan() // start scanning and wait for a result

        // if the result has content (dodati neku formu sa popunjenum podacima)
        if (result.hasContent) {
            stopScan()
            present({
                message: result.content,
                buttons: [
                    "Cancel",
                    { text: "Ok", handler: (d) => console.log("ok pressed") },
                ],
                onDidDismiss: (e) => console.log("did dismiss"),
            })
            console.log(result.content) // log the raw scanned content
        }
    }

    const stopScan = () => {
        BarcodeScanner.showBackground()
        setHideBg(false)
        BarcodeScanner.stopScan()
    }

    useEffect(() => {
        const checkPermission = async () => {
            setErr(undefined)
            try {
                const status = await BarcodeScanner.checkPermission({ force: true })

                if (status.granted) {
                    return true
                }

                if (status.neverAsked) {
                    // user has not been requested this permission before
                    // it is advised to show the user some sort of prompt
                    // this way you will not waste your only chance to ask for the permission
                    const c = confirm('We need your permission to use your camera to be able to scan barcodes');
                    if (!c) {
                        setErr("No camera permission");
                        return false;
                    }
                }

                return false
            } catch (error: any) {
                setErr(error.message)
            }
        }

        checkPermission()

        return () => { }
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"primary"}>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>QR Code scan</IonTitle>
                    {hideBg && (
                        <IonButtons slot="end">
                            <IonButton onClick={stopScan} color="danger">
                                <IonIcon icon={stopCircleOutline} slot="start" />
                                Stop Scan
                            </IonButton>
                        </IonButtons>
                    )}
                </IonToolbar>
            </IonHeader>
            <IonContent className={hideBg ? "hideBg" : "ion-padding"}>
                {isWeb && (
                    <IonRow>
                        <IonText color="danger">{"Not supported for web apps"}</IonText>
                    </IonRow>
                )}
                {err && (
                    <IonRow>
                        {" "}
                        <IonText color="danger">{err}</IonText>
                    </IonRow>
                )}

                {!!!err && !isWeb && hideBg && <div className="scan-box"></div>}
                {!!!err && !isWeb && !!!hideBg && (
                    <IonButton className="center-button" onClick={startScan}>
                        <IonIcon icon={scanOutline} slot="start" />
                        Start Scan
                    </IonButton>
                )}
            </IonContent>
        </IonPage>
    )
};

export default QRCodeScan;
