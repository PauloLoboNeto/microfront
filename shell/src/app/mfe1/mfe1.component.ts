import { loadRemoteModule } from "@angular-architects/module-federation";
import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren, ViewContainerRef } from "@angular/core";

@Component({
    templateUrl: './mfe1.component.html',
    selector: 'root-component'
})
export class MFE1Component implements AfterViewInit {

    mfesJson = [{
        name: "mfe1",
        type: 'script' as any,
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
        remoteName: 'mfe1',
        position: { "row": 1, "column": 1 },
        size: { "rowSpan": 1, "colSpan": 1 }
    },
    {
        name: "mfe1",
        type: 'script' as any,
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
        remoteName: 'mfe1',
        position: { "row": 1, "column": 2 },
        size: { "rowSpan": 1, "colSpan": 1 }
    },
    {
        name: "mfe1",
        type: 'script' as any,
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
        remoteName: 'mfe1',
        position: { "row": 2, "column": 1 },
        size: { "rowSpan": 3, "colSpan": 3 }
    },
    {
        name: "mfe1",
        type: 'script' as any,
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
        remoteName: 'mfe1',
        position: { "row": 1, "column": 3 },
        size: { "rowSpan": 3, "colSpan": 3 }
    }

    ]


    gridConfig = {
        "rows": 3,
        "columns": 3
    };

    @ViewChildren('mfeContainer', { read: ElementRef })
    mfeContainer!: QueryList<ElementRef>;


    constructor(private renderer: Renderer2) {

    }

    ngAfterViewInit() {
        const modulesMFE: any[] = []
        this.mfesJson.forEach((mfeJson, index) => {
            this.processMFE(mfeJson, this.mfeContainer.toArray()[index]);
        })
    }

    private processMFE(mfeJson: any, container: ElementRef) {
        loadRemoteModule({
            type: mfeJson.type,
            remoteEntry: mfeJson.remoteEntry,
            exposedModule: mfeJson.exposedModule,
            remoteName: mfeJson.remoteName
        }).then(res => {
            // container.clear();
            const element = this.renderer.createElement('mfe1-element')
            container.nativeElement.appendChild(element);
            // container.createComponent(res[mfeJson.exposedModule]);
            console.log(res);
            console.log(container);

        }).catch((res) => console.log(res));
    }

}


// customElement['casotenhaalguminput'] = 'algumacoisa'
// this.mfeContainer.nativeElement.appendChild(customElement);