const apacheLicense =
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const mitLicense =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gplLicense =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const bsdThreeLicense =
  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
const bsdTwoLicense =
  "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
const boostSoftwareLicense =
  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
const creativeCommonsLicense =
  "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
const eclipseLicense =
  "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
const mozillaLicense =
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
const gnuAfferoLicense =
  "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
const gnuPublicLicense =
  "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
const gnuLesserLicense =
  "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
const unlicense =
  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
const noLicense = "";

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  installation,
  contributing,
  tests,
  licenses,
  description,
  questions,
}) {
  let license;
  switch (licenses) {
    case "MIT":
      license = mitLicense;
      break;
    case "GPL-3.0":
      license = gplLicense;
      break;
    case "Apache-2.0":
      license = apacheLicense;
      break;
    case "BSD-3-Clause":
      license = bsdThreeLicense;
      break;
    case "BSD-2-Clause":
      license = bsdTwoLicense;
      break;
    case "Boost-1.0":
      license = boostSoftwareLicense;
      break;
    case "CC0-1.0":
      license = creativeCommonsLicense;
      break;
    case "EPL-1.0":
      license = eclipseLicense;
      break;
    case "MPL-2.0":
      license = mozillaLicense;
      break;
    case "AGPL-3.0":
      license = gnuAfferoLicense;
      break;
    case "GPL-2.0":
      license = gnuPublicLicense;
      break;
    case "LGPL-3.0":
      license = gnuLesserLicense;
      break;
    case "Unlicensed":
      license = unlicense;
      break;
    default:
      license = noLicense;
  }
  return `
# ${title}
## License
${license}
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${installation}
## Usage

## Contributing
${contributing}
## Tests
${tests}
## Questions

You can reach me through  https://www.github.com/${questions} with any questions

`;
}

module.exports = generateMarkdown;
