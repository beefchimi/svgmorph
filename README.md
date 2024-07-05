# SVG Morph

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Description coming soon...

## TypeScript

Originally ,we had a dedicated `tsconfig.node.json` that contained these unique `compilerOptions`:

```json
{
  "composite": true,
  "allowSyntheticDefaultImports": true
}
```

We then referenced that file in `tsconfig.json` via:
`"references": [{"path": "./tsconfig.node.json"}]`
