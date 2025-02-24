
export interface ClickOption {
  button?: "left" | "right" | "middle";
  clickCount?: number;
  delay?: number;
  force?: boolean;
  modifiers?: Array<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift">;
  noWaitAfter?: boolean;
  position?: {
    x: number;
    y: number;
  };
  timeout?: number;
  trial?: boolean;
}

export interface PageOption {
  click?: ClickOption;
}

export function getClickOption(option?: PageOption): ClickOption | undefined {
  return option ? option.click : undefined;
}

export function getPageOptionClickForce(b: boolean, option?: PageOption) {
  if (option) {
    if (option.click) {
      option.click.force = b;
    } else {
      option.click = {
        force: b,
      }
    }
    return option;
  } else {
    return {
      click: {
        force: b,
      }
    };
  }
}

export function getPageOptionForAfter() {
  return {
    click: {
      force: true,
    }
  };
}