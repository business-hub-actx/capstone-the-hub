export interface PartialProfile{
    profileId: string | null,
    profileAboutMe: string,
    profileEmail: string,
    profileJobTitle: string,
    profileName: string,
    profilePhoto: string,
    profileUrl: string,
    profileResume: string | null,
    profileSkills: string
}

export interface Profile{
    profileId: string | null,
    profileAboutMe: string,
    profileActivationToken: string | null,
    profileEmail: string,
    profileHash: string,
    profileJobTitle: string,
    profileName: string,
    profilePhoto: string,
    profileUrl: string,
    profileResume: string | null,
    profileSkills: string
}