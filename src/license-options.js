function License(name, badgeLink = undefined, description = undefined) {
    this.name = name;
    this.badgeLink = badgeLink;
    this.description = description;
}

const allLicenses = [
    new License('Academic Free License v3.0'),
    new License('Apache license 2.0'),
    new License('Artistic license 2.0'),
    new License('Boost Software License 1.0'),
    new License('BSD 2-clause "Simplified" license'),
    new License('BSD 3-clause "New" or "Revised" license'),
    new License('BSD 3-clause Clear license'),
    new License('Creative Commons license family'),
    new License('Creative Commons Zero v1.0 Universal'),
    new License('Creative Commons Attribution 4.0'),
    new License('Creative Commons Attribution Share Alike 4.0'),
    new License('Do What The F*ck You Want To Public License'),
    new License('Educational Community License v2.0'),
    new License('Eclipse Public License 1.0'),
    new License('European Union Public License 1.1'),
    new License('GNU Affero General Public License v3.0'),
    new License('GNU General Public License family'),
    new License('GNU General Public License v2.0'),
    new License('GNU General Public License v3.0'),
    new License('GNU Lesser General Public License family'),
    new License('GNU Lesser General Public License v2.1'),
    new License('GNU Lesser General Public License v3.0'),
    new License('ISC'),
    new License('LaTeX Project Public License v1.3c'),
    new License('Microsoft Public License'),
    new License('MIT'),
    new License('Mozilla Public License 2.0'),
    new License('Open Software License 3.0'),
    new License('PostgreSQL License'),
    new License('SIL Open Font License 1.1'),
    new License('University of Illinois/NCSA Open Source License'),
    new License('The Unlicense'),
    new License('zLib License')
];

module.exports = allLicenses;