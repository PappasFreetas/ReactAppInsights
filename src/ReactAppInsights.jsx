import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import "./ui/ReactAppInsights.css";
import { createBrowserHistory } from "history";



class ReactAppInsights extends Component {
    componentDidMount() {
        
        const browserHistory = createBrowserHistory({ basename: '' });
        const reactPlugin = new ReactPlugin();
        const appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: '59805d60-2856-44d6-be59-84d5de4685aa',
                enableAutoRouteTracking: true,
                extensions: [reactPlugin],
                extensionConfig: {
                    [reactPlugin.identifier]: { history: browserHistory }
                }
            }
        });
        appInsights.loadAppInsights();
        appInsights.trackPageView();
        
        window.appInsights = appInsights;
        
 

    }
    render() {

        return <div></div> ;
    }
}

export default hot(ReactAppInsights);
