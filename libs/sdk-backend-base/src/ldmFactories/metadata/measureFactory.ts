// (C) 2019-2020 GoodData Corporation
import identity from "lodash/identity";
import { ObjRef } from "@gooddata/sdk-model";
import { MetadataObjectBuilder } from "./factory";
import { IMeasureMetadataObject } from "@gooddata/sdk-backend-spi";
import { builderFactory, BuilderModifications } from "../builder";

/**
 * Measure metadata object builder
 * See {@link Builder}
 *
 * @beta
 */
export class MeasureMetadataObjectBuilder<
    T extends IMeasureMetadataObject = IMeasureMetadataObject
> extends MetadataObjectBuilder<T> {
    public expression(maql: string): this {
        this.item.expression = maql;
        return this;
    }

    public format(format: string): this {
        this.item.format = format;
        return this;
    }
}

/**
 * Measure metadata object factory
 *
 * @param ref - measure reference
 * @param modifications - measure builder modifications to perform
 * @returns created measure metadata object
 * @beta
 */
export const newMeasureMetadataObject = (
    ref: ObjRef,
    modifications: BuilderModifications<MeasureMetadataObjectBuilder> = identity,
): IMeasureMetadataObject =>
    builderFactory(MeasureMetadataObjectBuilder, { type: "measure", ref }, modifications);
