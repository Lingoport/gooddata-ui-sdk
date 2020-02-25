// (C) 2007-2018 GoodData Corporation
import * as React from "react";
import { BaseChart } from "../_base/BaseChart";
import { ICoreChartProps } from "../chartProps";

export class CoreColumnChart extends React.PureComponent<ICoreChartProps, null> {
    public render() {
        return <BaseChart type="column" {...this.props} />;
    }
}