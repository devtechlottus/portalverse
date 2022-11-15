import { OustandingModuleConfig } from "./OustandingModule.types";

export type CardsOstandingConfig = {
    cards: Array<OustandingModuleConfig>;
    title?: string;
    wrapper?: boolean;
}

export type CardsOstandingData = {
    data: CardsOstandingConfig;
}