'use strict';

class Company {
    #shareCapital = "$1000000";

    constructor(name, foundedYear, headquarters) {
        this.name = name;
        this.foundedYear = foundedYear;
        this.headquarters = headquarters;
    }

    getInfo() {
        console.log(`Name: ${this.name}, Founded Year: ${this.foundedYear}, Headquarters: ${this.headquarters}`);
    }

    changeHeadquarters(newLocation) {
        this.headquarters = newLocation;
    }

    changeName(newName) {
        this.name = newName;
    }
}

class DevelopmentDepartment extends Company {
    #numberOfProjects = 4;

    constructor(name, foundedYear, headquarters, developmentType, projectComplexity) {
        super(name, foundedYear, headquarters);
        this.developmentType = developmentType;
        this.projectComplexity = projectComplexity;
    }

    developSoftware() {
        console.log(`Developing ${this.developmentType}`);
    }

    estimateProjectComplexity() {
        console.log(`Project Complexity: ${this.projectComplexity}`);
    }

    completeSoftwareDevelopment() {
        console.log(`Completing the development of ${this.developmentType}`);
    }
}

class FrontendTeam extends DevelopmentDepartment {
    #numberOfFrontendDevelopers = 5;

    constructor(name, foundedYear, headquarters, developmentType, projectComplexity, programmingLanguage, employee, project) {
        super(name, foundedYear, headquarters, developmentType, projectComplexity);
        this.programmingLanguage = programmingLanguage;
        this.employee = employee;
        this.project = project;
    }

    chooseProgrammingLanguage() {
        console.log(`Choose ${this.programmingLanguage}`);
    }

    hiringEmployee() {
        console.log(`Hiring ${this.employee}`);
    }

    deployProject() {
        console.log(`Deploy ${this.project}`);
    }
}

class QaEngineerTeam extends DevelopmentDepartment {
    #numberOfQaEngineer = 3;

    constructor(name, foundedYear, headquarters, developmentType, projectComplexity, typeOfQa, automationLevel) {
        super(name, foundedYear, headquarters, developmentType, projectComplexity);
        this.typeOfQa = typeOfQa;
        this.automationLevel = automationLevel;
    }

    performQaTesting() {
        console.log(`Performing ${this.typeOfQa} testing`);
    }

    changeAutomationLevel(newLevel) {
        this.automationLevel = newLevel;
    }

    generateQaReport() {
        console.log(`Generating QA report`);
    }
}

class MarketingDepartment extends Company {
    #marketingBudget = "$150000";

    constructor(name, foundedYear, headquarters, marketingType, targetAudience) {
        super(name, foundedYear, headquarters);
        this.marketingType = marketingType;
        this.targetAudience = targetAudience;
    }

    promoteProduct() {
        console.log(`Promoting ${this.marketingType} products`);
    }

    changeTargetAudience(newAudience) {
        this.targetAudience = newAudience;
    }

    makeMarketAnalysis() {
        console.log(`Conducting market analysis`);
    }
}

class PerfomanceMarketingTeam extends MarketingDepartment {
    #advertisingBudget = "$50000";

    constructor(name, foundedYear, headquarters, marketingType, targetAudience, perfomanceMetric, campaign) {
        super(name, foundedYear, headquarters, marketingType, targetAudience);
        this.perfomanceMetric = perfomanceMetric;
        this.campaign = campaign;
    }

    createPerfomanceReport() {
        console.log(`Basic ${this.perfomanceMetric} Report`);
    }

    setupCampaign() {
        console.log(`Setup ${this.campaign}`);
    }

    optimizeCampaign() {
        console.log(`Optimize ${this.campaign}`);
    }
}

class BrandMarketingTeam extends MarketingDepartment {
    #budgetForCollaboration = "$100000";

    constructor(name, foundedYear, headquarters, marketingType, targetAudience, awarenessMetric, creativeType, advertisingPlatform) {
        super(name, foundedYear, headquarters, marketingType, targetAudience);
        this.awarenessMetric = awarenessMetric;
        this.creativeType = creativeType;
        this.advertisingPlatform = advertisingPlatform;
    }

    createAwarenessReport() {
        console.log(`Basic ${this.awarenessMetric} Report`);
    }

    createCreative() {
        console.log(`Create ${this.creativeType}`);
    }

    chooseAdvertisingPlarform() {
        console.log(`Choose ${this.advertisingPlatform} for advertising`);
    }
}

const frontendTeamA = new FrontendTeam("Web Creators", 2023, "Kyiv", "Web", "Medium", "JavaScript", "Developer", "Project X");
frontendTeamA.getInfo();
frontendTeamA.deployProject();