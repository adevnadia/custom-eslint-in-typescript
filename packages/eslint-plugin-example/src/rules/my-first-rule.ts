import { Rule } from 'eslint';

const rule: Rule.RuleModule = {
    meta: {
        docs: {
            description: 'This rule is run on typescript!',
        },
    },
    create: (context: Rule.RuleContext) => {
        return {
            VariableDeclarator: (node) => {
                if (node.id.type === 'Identifier' && node.id.name !== 'bla') {
                    context.report({
                        node,
                        message: 'All variabled should be named "bla"!',
                    });
                }
            }
        }
    },
};

export default rule;
