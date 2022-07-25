// function asdf() {
//   this.btn = {
//     mx: "mx-2",
//   }
//   this.btnPrimary = {
//     ...this.btn,
//     bgColor: "bg-green-500",
//   },
//   this.btnFail = {
//     bgColor: "bg-red-500",
//   },
// };
export type btnTemplates = "btnPrimary" | "btnFail";

class ButtonStyles {
  selectedStyle: any;

  private defaultStyles = {
    btn: {
      mx: "mx-2",
    },
  };

  private styleTemplates = {
    btnPrimary: {
      ...this.defaultStyles.btn,
      bgColor: "bg-green-500",
    },
    btnFail: {
      ...this.defaultStyles.btn,
      bgColor: "bg-red-500",
    },
  };

  constructor(styleName: btnTemplates = "btnPrimary") {
    this.selectedStyle = this.styleTemplates[styleName];
  }

  getStyleString() {
    return Object.values(this.selectedStyle).join(" ");
  }
}

export { ButtonStyles };
