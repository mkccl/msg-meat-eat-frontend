
export class User {
    userId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email:    string;
    token:    string;
    flag: Flag
    dashboardImage: DashboardImage;
}

export class Flag {
    hasBackgroundImage: boolean;
    newUser: boolean;
    flagId: number;
}

export class DashboardImage {
    path: string;
    type: string;
    dashboardId: number;
}
