import { SSTConfig } from "sst";
import { Web } from "./stacks/Web";
import { API } from "./stacks/Api";

export default {
  config(_input) {
    return {
      name: "kanban-task-manager",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(Web).stack(API);
  },
} satisfies SSTConfig;
