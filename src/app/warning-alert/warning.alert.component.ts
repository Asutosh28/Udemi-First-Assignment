import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-allert',
    template: `
    <p>This is a warning, you are in danger!</p>`,
    styles:[
        `p {
            padding: 20px;
            border: 1px solid red);
            background-color: #ff00005d ;
            width: 50%;
            text-align: center;
        }`
    ]
})
export class WarningAlertComponent {

}