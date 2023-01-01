import {Godavaribuilders,Properties,Properties2,Godavariaboutus,Godavaricontact } from "../pages";
import { CONSTANTS } from "./constants";

export const routes = [{
    component: <Godavaribuilders />,
    path: CONSTANTS.ROUTES.HOME_PAGE,
    isExact: true
},  {
    component: <Godavaribuilders />,
    path: CONSTANTS.ROUTES.GODAVARI_PAGE,
    isExact: true
}, {
    component: <Properties2 />,
    path: CONSTANTS.ROUTES.PROPERTIES2_PAGE,
    isExact: true
},{
    component: <Properties />,
    path: CONSTANTS.ROUTES.PROPERTIES_PAGE,
    isExact: true
},{
    component: <Godavariaboutus />,
    path: CONSTANTS.ROUTES.GODAVARIABOUTUS_PAGE,
    isExact: true
},{
    component: <Godavaricontact />,
    path: CONSTANTS.ROUTES.GODAVARICONTACT_PAGE,
    isExact: true
}
];