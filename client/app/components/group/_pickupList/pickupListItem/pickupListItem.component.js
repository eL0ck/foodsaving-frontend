import template from "./pickupListItem.html";
import controller from "./pickupListItem.controller";
import "./pickupListItem.styl";

let pickupListItemComponent = {
  bindings: {
    data: "<",              // pickup info..
    showDetail: "<",        // same as in pickupList
    onDelete: "&",
    meta: "<",   //metadata for pickup including .isFull
    onJoin: "&",
    onLeave: "&"
  },
  template,
  controller
};

export default pickupListItemComponent;
