import { LitElement, property, h, JsxNode } from "@arcgis/lumina";
import { CSS, TEXT } from "./resources";
import { styles } from "./small-info-card.scss";

declare global {
  interface DeclareElements {
    "calcite-small-info-card": SmallInfoCard;
  }
}

export class SmallInfoCard extends LitElement {
  // #region Static Properties

  static override styles = styles;

  // #endregion
  // #region Public Properties

  @property({ reflect: true }) border = false;
  @property({ reflect: true }) hovering = false;

  /**
   * The heading text.
   *
   * @required
   */
  @property() heading: string = TEXT.heading;

  // #endregion

  // #region State Properties

  // private internalProp: string;
  //
  // @state() internalRenderableProp = 0;

  // #endregion

  // #region Lifecycle

  constructor() {
    super();
    this.listen("mouseenter", this.handleMouseEnter);
    this.listen("mouseleave", this.handleMouseLeave);
  }

  // #endregion

  // #region Events

  // calciteSmallInfoClicked = createEvent({ cancelable: false });

  // #endregion

  // #region Public Methods

  // @method()
  // async publicMethod(): Promise<void> {
  // }

  // #endregion

  // #region Private Methods

  handleMouseEnter(event: MouseEvent): void {
    if (event.target === this.el) {
      this.hovering = true;
      event.stopPropagation();
    }
  }

  handleMouseLeave(event: MouseEvent): void {
    if (event.target === this.el) {
      this.hovering = false;
      event.stopPropagation();
    }
  }

  // #endregion

  // #region Rendering

  override render(): JsxNode {
    return (
      <article>
        <h3 class={CSS.heading}>{this.heading}</h3>
        <slot />
      </article>
    );
  }

  // #endregion
}
