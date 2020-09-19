function License(name, badgeLink = '', link = '') {
    this.name = name;
    this.badgeLink = badgeLink;
    this.link = link;
}

const allLicenses = [
    new License('Academic Free v3.0'),
    new License('Apache 2.0',
        '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        'https://opensource.org/licenses/Apache-2.0'),
    new License('Artistic 2.0',
        '![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)',
        'https://opensource.org/licenses/Artistic-2.0'),
    new License('Boost Software 1.0',
        '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)',
        'https://www.boost.org/LICENSE_1_0.txt'),
    new License('BSD 2-clause "Simplified"',
        '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)',
        'https://opensource.org/licenses/BSD-2-Clause'),
    new License('BSD 3-clause "New" or "Revised"',
        '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
        'https://opensource.org/licenses/BSD-3-Clause'),
    new License('BSD 3-clause Clear',
        '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
        'https://opensource.org/licenses/BSD-3-Clause'),
    new License('Creative Commons Family'),
    new License('Creative Commons Zero v1.0 Universal',
        '![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)',
        'http://creativecommons.org/publicdomain/zero/1.0/'),
    new License('Creative Commons Attribution 4.0',
        '![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)',
        'https://creativecommons.org/licenses/by/4.0/'),
    new License('Creative Commons Attribution Share Alike 4.0',
        '![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)',
        'https://creativecommons.org/licenses/by-sa/4.0/'),
    new License('Educational Community v2.0'),
    new License('Eclipse Public 1.0',
        '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)',
        'https://opensource.org/licenses/EPL-1.0'),
    new License('European Union Public 1.1'),
    new License('GNU Affero General Public v3.0',
        '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)',
        'https://www.gnu.org/licenses/agpl-3.0'),
    new License('GNU General Public Family'),
    new License('GNU General Public v2.0',
        '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)',
        'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'),
    new License('GNU General Public v3.0',
        '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        'https://www.gnu.org/licenses/gpl-3.0'),
    new License('GNU Lesser General Public Family'),
    new License('GNU Lesser General Public v2.1'),
    new License('GNU Lesser General Public v3.0',
        '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)',
        'https://www.gnu.org/licenses/lgpl-3.0'),
    new License('ISC',
        '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
        'https://opensource.org/licenses/ISC'),
    new License('LaTeX Project Public v1.3c'),
    new License('Microsoft Public'),
    new License('MIT',
        '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        'https://opensource.org/licenses/MIT'),
    new License('Mozilla Public 2.0',
        '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
        'https://opensource.org/licenses/MPL-2.0'),
    new License('Open Software 3.0'),
    new License('PostgreSQL'),
    new License('SIL Open Font 1.1',
        '![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)',
        'https://opensource.org/licenses/OFL-1.1'),
    new License('University of Illinois/NCSA Open Source'),
    new License('The Unlicense',
        '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)',
        'http://unlicense.org/'),
    new License('zLib',
        '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)',
        'https://opensource.org/licenses/Zlib')
];

module.exports = allLicenses;