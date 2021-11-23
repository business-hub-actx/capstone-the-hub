-- never DROP TABLEs on live data!!!!
-- not null means the attribute is required!
-- to make something optional, exclude the not null
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS profileTag;
DROP TABLE IF EXISTS postTag;

-- Profile Table
CREATE TABLE profile (
                         profileId BINARY(16) NOT NULL,
                         profileActivationToken CHAR(32),
                         profileName VARCHAR(32) NOT NULL,
                         profileEmail VARCHAR(128) NOT NULL,
                         profileSkills blob NOT NULL,
                         profileJobTitle VARCHAR(128) NOT NULL,
                         profileAboutMe blob NOT NULL,
                         profilePhoto VARCHAR(128) NOT NULL,
                         profileHash CHAR(97) NOT NULL,
                         profileUrl VARCHAR(128) NOT NULL,
                         profileResume VARCHAR(32),
                         UNIQUE(profileEmail),
                         UNIQUE(profileActivationToken),
                         UNIQUE(profileHash),
                         PRIMARY KEY(profileId)
);
-- Post Table
CREATE TABLE Post (
                       postId BINARY(16) NOT NULL,
                       postName VARCHAR(32) NOT NULL,
                       postLogo VARCHAR(128) NOT NULL,
                       postDescription blob NOT NULL,
                       postJobDescription blob NOT NULL,
                       postLink VARCHAR(128),
                       postWebsite VARCHAR(128),
                       postContactInfo blob NOT NULL,
                       UNIQUE(postLink),
                       UNIQUE(postWebsite),
                       PRIMARY KEY(postId)
);
-- Tag Table
CREATE TABLE tag (
                       tagId BINARY(16) NOT NULL,
                       tagName VARCHAR(32) NOT NULL,
                       PRIMARY KEY(tagId)
);

-- profileTag Table (Weak Entity)
CREATE TABLE profileTag (
                            profileTagProfileId BINARY(16) NOT NULL,
                            profileTagTagId BINARY(16) NOT NULL,
                            INDEX(profileTagProfileId),
                            INDEX(profileTagTagId),
                            FOREIGN KEY(profileTagProfileId) REFERENCES profile(profileId),
                            FOREIGN KEY(profileTagTagId) REFERENCES tag(tagId)
);


-- postTag Table (Weak Entity)
CREATE TABLE postTag (
                          postTagPostId BINARY(16) NOT NULL,
                          postTagTagId BINARY(16) NOT NULL,
                          INDEX(postTagPostId),
                          INDEX(postTagTagId),
                          FOREIGN KEY(postTagPostId) REFERENCES post(PostId),
                          FOREIGN KEY(postTagTagId) REFERENCES tag(TagId)
)