// (C) 2007-2021 GoodData Corporation
import { IExecutionDefinition, ITotal, TotalType } from "@gooddata/sdk-model";
import { ColumnWidthItem } from "../columnWidths";
import { ISeparators } from "@gooddata/numberjs";
import { ColumnResizedCallback, IMenu } from "../publicTypes";
import { DataViewFacade, GoodDataSdkError, ILoadingState, IPushData, OnExportReady } from "@gooddata/sdk-ui";
import { IScrollPosition } from "./stickyRowHandler";
import {
    AgGridEvent,
    BodyScrollEvent,
    ColumnResizedEvent,
    GridOptions,
    GridReadyEvent,
    SortChangedEvent,
} from "@ag-grid-community/all-modules";
import { IPreparedExecution } from "@gooddata/sdk-backend-spi";

/*
 * The types defined in this file are used internally thorough different components. They are never intended
 * for public exports.
 */

export interface IMenuAggregationClickConfig {
    type: TotalType;
    measureIdentifiers: string[];
    attributeIdentifier: string;
    include: boolean;
}

export type TableConfig = {
    hasColumnWidths: boolean;

    getExecutionDefinition: () => IExecutionDefinition;
    getMenuConfig: () => IMenu;
    getGroupRows: () => boolean;
    getColumnTotals: () => ITotal[];

    getResizingConfig: () => ColumnResizingConfig;

    onGridReady: (event: GridReadyEvent) => void;
    onFirstDataRendered: (_event: AgGridEvent) => Promise<void>;
    onBodyScroll: (event: BodyScrollEvent) => void;
    onModelUpdated: () => void;
    onGridColumnsChanged: () => void;
    onGridColumnResized: (columnEvent: ColumnResizedEvent) => Promise<void>;
    onSortChanged: (event: SortChangedEvent) => void;
    onGridSizeChanged: (event: any) => void;

    onLoadingChanged: (loadingState: ILoadingState) => void;
    onError: (error: GoodDataSdkError, execution: IPreparedExecution) => void;
    onExportReady: OnExportReady;

    pushData: (data: IPushData) => void;

    onPageLoaded: (dv: DataViewFacade, newResult: boolean) => void;
    onMenuAggregationClick: (menuAggregationClickConfig: IMenuAggregationClickConfig) => void;
};

export type ColumnResizingConfig = {
    defaultWidth: number;
    growToFit: boolean;
    columnAutoresizeEnabled: boolean;
    widths: ColumnWidthItem[] | undefined;

    clientWidth: number;
    containerRef: HTMLDivElement | undefined;
    separators: ISeparators | undefined;

    isMetaOrCtrlKeyPressed: boolean;
    isAltKeyPressed: boolean;

    onColumnResized: ColumnResizedCallback | undefined;
};
export type StickyRowConfig = {
    scrollPosition: IScrollPosition;
    lastScrollPosition: IScrollPosition;
};

export interface ICustomGridOptions extends GridOptions {
    enableMenu?: boolean;
}
