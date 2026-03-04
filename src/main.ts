import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  // TODO: implement this function
  const syrupElements = document.getElementsByClassName("syrup");
  
  if (syrupElements.length === 0) return;

  const syrupDiv = syrupElements[0] as HTMLDivElement;

  const selectedSyrup = input.value;
  const selectedColor = syrups[selectedSyrup];
  if (!selectedColor) return;

  syrupDiv.style.setProperty("--syrup-color", selectedColor);
}

function setupSyrupListeners(): void {
  // TODO: implement this function
  const syrupInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="syrup"]',
  );

  for (let i = 0; i < syrupInputs.length; i++) {
    const input = syrupInputs[i];

    input.addEventListener("change", () => {
      applySyrup(input);
    });
  }

  const checkedSyrup = document.querySelector<HTMLInputElement>(
    'input[name="syrup"]:checked',
  );

  if (checkedSyrup) {
    applySyrup(checkedSyrup);
  }

}

setupSyrupListeners();

function setupCreamListeners(): void {
  // TODO: implement this function
  const creamInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="cream"]',
  );

  for (let i = 0; i < creamInputs.length; i++) {
    const input = creamInputs[i];

    input.addEventListener("change", () => {
      applyCream(input);
    });
  }

  const checkedCream = document.querySelector<HTMLInputElement>(
    'input[name="cream"]:checked',
  );

  if (checkedCream) {
    applyCream(checkedCream);
  }
}
setupCreamListeners();

function setupTemperatureListeners(): void {
  // TODO: implement this function
  const tempInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="temperature"]',
  );

  for (let i = 0; i < tempInputs.length; i++) {
    const input = tempInputs[i];

    input.addEventListener("change", () => {
      applyTemperature(input);
    });
  }

  const checkedTemp = document.querySelector<HTMLInputElement>(
    'input[name="temperature"]:checked',
  );

  if (checkedTemp) {
    applyTemperature(checkedTemp);
  }
}

setupTemperatureListeners();

function setupBaseListeners(): void {
  // TODO: implement this function
  const tempInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="base"]',
  );

  for (let i = 0; i < tempInputs.length; i++) {
    const input = tempInputs[i];

    input.addEventListener("change", () => {
      applyBase(input);
    });
  }
  
  const checkedinput = document.querySelector<HTMLInputElement>(
    'input[name="base"]:checked',
  );

  if (checkedinput) {
    applyBase(checkedinput);
  }
  
}

setupBaseListeners();

