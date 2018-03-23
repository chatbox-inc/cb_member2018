import {listItems,mindLists,skillItems} from "json-loader!yaml-loader!~/contents/index.yml"
import mikakane from "json-loader!yaml-loader!~/contents/detail/mikakane.yml"
import yasui from "json-loader!yaml-loader!~/contents/detail/mikakane.yml"
import shono from "json-loader!yaml-loader!~/contents/detail/mikakane.yml"
import kaie from "json-loader!yaml-loader!~/contents/detail/mikakane.yml"



export const state = () => ({
  listItems,mindLists,skillItems,
  members:{
    mikakane, yasui, shono, kaie
  }
})
