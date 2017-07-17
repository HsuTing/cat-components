'use strict';

export default `
# How to use
Those components are not include in the package. As a result, you can use the command to copy the components to your project. This is recommended to add those components to a sharing folder of the components. The default folder is \`./src/components/share/\`, but you can change the root folder.

\`\`\`js
yarn copy
\`\`\`

#### Reason
Why I does not include those components in the package? I think the components in packages should be as simple as possible. If the component is complex, I must need to add more \`props\` to make user can control more things about the component. As a result, when a component can be build with other components, I will add that component here except for adding in the packages.
`;
