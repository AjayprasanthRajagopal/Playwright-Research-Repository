import { formSuite } from "./form/testData";
import { shadowDom } from "./shadow/testData";
import { uiActions } from "./uiActions/testData";

const env = process.env.ENV || "qastg";

export const formData = formSuite[env];
export const shadowData = shadowDom[env];
export const uiActionsData = uiActions[env];
