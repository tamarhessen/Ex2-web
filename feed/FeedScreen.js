import InfoBar from "./InfoBar"
import MainScreen from "./MainScreen"


function FeedScreen() {
    return (<>
        <title>Feed</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
              integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossOrigin="anonymous"/>
        <InfoBar></InfoBar>
        <MainScreen username={"hello world"}></MainScreen>
    </>)
}

export default FeedScreen;