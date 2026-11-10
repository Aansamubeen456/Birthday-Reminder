// @ts-check
import { module } from "@prisma/composer";
import reactProjectService from "./service.mjs";

export default module("react-project", ({ provision }) => {
  provision(reactProjectService, { id: "reactproject" });
});
