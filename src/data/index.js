import data_Menus from "./menu.json";
import data_b2w2 from "./b2w2_postgame_checklist.json";
import data_bw from "./bw_postgame_checklist.json";
import data_dp from "./dp_postgame_checklist.json";
import data_frlg from "./frlg_postgame_checklist.json";
import data_gs from "./gs_postgame_checklist.json";
import data_gsc from "./gsc_postgame_checklist.json";
import data_hgss from "./hgss_postgame_checklist.json";
import data_oras from "./oras_postgame_checklist.json";
import data_plat from "./plat_postgame_checklist.json";
import data_rb from "./rb_postgame_checklist.json";
import data_rby from "./rby_postgame_checklist.json";
import data_rs from "./rs_postgame_checklist.json";
import data_rse from "./rse_postgame_checklist.json";
import data_sumo from "./sumo_postgame_checklist.json";
import data_usum from "./usum_postgame_checklist.json";
import data_xy from "./xy_postgame_checklist.json";

const checklists = {
  data_b2w2,
  data_bw,
  data_dp,
  data_frlg,
  data_gs,
  data_gsc,
  data_hgss,
  data_oras,
  data_plat,
  data_rb,
  data_rby,
  data_rs,
  data_rse,
  data_sumo,
  data_usum,
  data_xy,
};

const sanitizeLink = (link) => link.startsWith("https://")
  ? link
  : "/" + link.replace(/index|\.html$|\.\.\//g, "");

const sanitizeKey = (key) => key.replace(/\.html$|\.\.\//g, "");

const transformMenu = (menu) => ({
  ...menu,
  link: menu.link && sanitizeLink(menu.link),
  key: sanitizeKey(menu.link || menu.itemname),
  menuitems: menu.menuitems && menu.menuitems.map(
    (menuitem) => ({
      ...menuitem,
      link: menuitem.link && sanitizeLink(menuitem.link),
      key: sanitizeKey(menuitem.link || menuitem.itemname),
    }),
  ),
});

const filterRoutes = (menu) => (menu.itemname !== "Useful Links");

const data = {
  menus: data_Menus.menus.map(transformMenu),
  routes: data_Menus.menus.filter(filterRoutes).map(transformMenu),
  pages: Object.entries(checklists)
    .map(([key, value]) => ([key.replace("data_", ""), value]))
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key + "_checklist"]: value[key],
    }), {}),
};

export default data;

