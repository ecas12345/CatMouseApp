export class Scenario {
    scenario = '';
    spacesCanJump = 0;

    constructor(scenario: string, spacesCanJump: number) {
        this.scenario = scenario;
        this.spacesCanJump = spacesCanJump
    }
}