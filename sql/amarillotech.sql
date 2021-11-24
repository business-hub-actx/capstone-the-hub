-- never DROP TABLEs on live data!!!!
-- not null means the attribute is required!
-- to make something optional, exclude the not null

DROP TABLE IF EXISTS postTag;
DROP TABLE IF EXISTS profileTag;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS profile;

-- Profile Table
CREATE TABLE profile (
                         profileId BINARY(16) NOT NULL,
                         profileAboutMe blob NOT NULL,
                         profileActivationToken CHAR(32),
                         profileEmail VARCHAR(128) NOT NULL,
                         profileHash CHAR(97) NOT NULL,
                         profileJobTitle VARCHAR(128) NOT NULL,
                         profileName VARCHAR(32) NOT NULL,
                         profilePhoto VARCHAR(255) NOT NULL,
                         profileUrl VARCHAR(128) NOT NULL,
                         profileResume VARCHAR(32),
                         profileSkills VARCHAR(255) NOT NULL,
                         UNIQUE(profileEmail),
                         PRIMARY KEY(profileId)
);
-- Post Table
CREATE TABLE post (
                       postId BINARY(16) NOT NULL,
                       postContactInfo blob NOT NULL,
                       postDescription blob NOT NULL,
                       postEmail VARCHAR(128),
                       postJobDescription blob NOT NULL,
                       postLogo VARCHAR(128) NOT NULL,
                       postName VARCHAR(32) NOT NULL,
                       postProfileId BINARY(16) NOT NULL,
                       postWebsite VARCHAR(128),
                       UNIQUE(postEmail),
                       UNIQUE(postWebsite),
                       FOREIGN KEY(postProfileId) REFERENCES profile(profileId),
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
                            profileTagId BINARY(16) NOT NULL,
                            profileTagProfileId BINARY(16) NOT NULL,
                            profileTagTagId BINARY(16) NOT NULL,
                            INDEX(profileTagProfileId),
                            INDEX(profileTagTagId),
                            FOREIGN KEY(profileTagProfileId) REFERENCES profile(profileId),
                            FOREIGN KEY(profileTagTagId) REFERENCES tag(tagId),
                            PRIMARY KEY(profileTagId)
);


-- postTag Table (Weak Entity)
CREATE TABLE postTag (
                          postTagId BINARY(16) NOT NULL,
                          postTagPostId BINARY(16) NOT NULL,
                          postTagTagId BINARY(16) NOT NULL,
                          INDEX(postTagPostId),
                          INDEX(postTagTagId),
                          FOREIGN KEY(postTagPostId) REFERENCES post(PostId),
                          FOREIGN KEY(postTagTagId) REFERENCES tag(TagId),
                          PRIMARY KEY(postTagId)
)