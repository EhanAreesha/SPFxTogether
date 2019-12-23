import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "HolidyEventWebPartStrings";
import HolidyEvent from "./components/HolidyEvent";
import { IHolidyEventProps } from "./components/IHolidyEventProps";

export interface IHolidyEventWebPartProps {
  description: string;
}

export default class HolidyEventWebPart extends BaseClientSideWebPart<
  IHolidyEventWebPartProps
> {
  public render(): void {
    const element: React.ReactElement<IHolidyEventProps> = React.createElement(
      HolidyEvent,
      {
        description: "this.properties.description"
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
