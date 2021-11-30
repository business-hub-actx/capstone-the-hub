export interface partialProfile{
    profileId: string | null,
    profileAboutMe: string | null,
    profileEmail: string | null,
    profileJobTitle: string | null,
    profileName: string | null,
    profilePhoto: string | null,
    profileUrl: string | null,
    profileResume: string | null,
    profileSkills: string | null
}

export interface Profile{
    profileId: string | null,
    profileAboutMe: string | null,
    profileActivationToken: string | null,
    profileEmail: string | null,
    profileHash: string | null,
    profileJobTitle: string | null,
    profileName: string | null,
    profilePhoto: string | null,
    profileUrl: string | null,
    profileResume: string | null,
    profileSkills: string | null
}