// >> chart-angular-series-styling-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Country } from '../data-services/country';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-styling-series',
    providers: [DataService],
    templateUrl: 'chart-styling-series.component.html'
})
export class ChartStylingSeriesComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;

    constructor(private _dataService: DataService) { }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._dataService.getCategoricalSource());
    }
}
// << chart-angular-series-styling-component