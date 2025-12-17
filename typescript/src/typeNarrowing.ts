function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `making ${kind} chai`;
  }
  return `chai order ${kind}`;
}

function serverChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `serving massage masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai`;
  }
  if (size === "medium" || "large") {
    return `make extra chai`;
  }
  return `chai order #${size}`;
}

class KulhadChai {
  serve() {
    return `serving kulhad chai`;
  }
}
class CuttingChai {
  serve() {
    return `serving kulhad chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serverOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `serving custom chai: ${item}`;
}

type MasalaChai = { type: "Masala"; spicelevel: number };
type GingerChai = { type: "Ginger"; amount: number };
type ElaichiChai = { type: "Elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "Masala":
      return "masala chai";
      break;
    case "Ginger":
      return "Ginger chai";
      break;
    case "Elaichi":
      return "Elaichi chai";
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spicelevel" in order) {
  }
}

function isStingArray(arr: unknown): arr is string[] {}
