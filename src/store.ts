class _DOM_Store {
  /**
   * main container
   *
   * contains all DOM elements except
   * the Twitch chat and the left navigation bar
   */
  static mainContainer: HTMLDivElement =
    // for some reason class becomes an ID if opened from mobile
    document.querySelector(".cpu-champs-page-ccc")! ??
    document.querySelector("#cpu-champs-page-ccc");

  // * =========================
  // * bottom right part of the screen:
  // ? <bottomPanel>
  // ?   <eventList button>
  // ?   <tabButtonsContainer>
  // ?      <tabButtons - vote | standings | schedule etc... >
  // ?   </tabButtonsContainer>
  // ?   <...>
  // ?     <...>
  // ?   </...>
  // ? </bottomPanel>

  /**
   * div container on bottom-right part of the screen
   */
  static bottomPanel: HTMLDivElement = document.getElementById(
    "bottomtable-bottomtable"
  )! as HTMLDivElement;

  static tabButtonsContainer = this.bottomPanel.querySelector(
    ".selection-panel-container"
  )!;

  /**
   * node list of `vote` / `standings` / `schedule` / `match` / `info` buttons
   */
  static tabButtons: NodeListOf<HTMLSpanElement> =
    this.bottomPanel.querySelectorAll(".selection-panel-item")!;

  /**
   *  button with text "standings"
   */
  static standingsBtn = this.tabButtons[1];

  /**
   * button with text "schedule"
   */
  static scheduleBtn = this.tabButtons[2];

  // not all tab buttons, actually
  static allTabButtons = {
    voteBtn: this.tabButtons[0],
    standings: this.tabButtons[1],
    schedule: this.tabButtons[2],
    match: this.tabButtons[3],
    info: this.tabButtons[4],
  };

  /**
   * direct parent of a `movesTable`
   */
  static movesTableContainer: HTMLDivElement = document.querySelector(
    ".movetable-tablewrapper"
  )!;

  /**
   * main moves table
   */
  static movesTable: HTMLTableElement =
    this.movesTableContainer.querySelector("table")!;
}

class _State {
  static userSettingsDefault: UserSettings = {
    ptnml: true,
    elo: true,
    pairPerRow: 5,
    pairsPerRowDuel: 10,
    allowKeyboardShortcuts: true,
    agreementHighlight: true,
    pgnFetch: true,
    addLinksToGameSchedule: true,
    replaceClockSvg: true,
    displayEngineNames: true,
    materialCount: true,
  };

  static eventHrefList: string[] = [];

  /** event data from the page content */
  static pageData: PageData = {
    currentGame: null,
    totalGames: null,
    active: false,
  };

  /** event data from the current active tab */
  static tabData: TabData = {
    event: null,
    game: null,
  };

  // todo delete?
  static getGameNumber() {
    return (
      this.tabData.game ?? this.pageData.currentGame ?? this.pageData.totalGames
    );
  }
}

// todo rewrite
class Transpositions {
  static sequence = -1;
  static TTList: TTEntry[] = [];

  static reset() {
    this.sequence = -1;
    this.TTList.length = 0;
  }
}
