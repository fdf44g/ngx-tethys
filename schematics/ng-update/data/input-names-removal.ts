import { TargetVersion, VersionChanges } from '@angular/cdk/schematics';

export interface InputNameRemovalUpgradeData {
    /**
     * The @Input() name to remove.
     *
     * 要移除的 @Input() 名称。
     *
     */
    remove: string;
    /**
     * Controls which elements and attributes in which this removal is made.
     *
     * 控制要移除的元素和属性。
     *
     */
    limitedTo: {
        /**
         * Limit to elements with any of these element tags.
         *
         * 限制为任何具有这些元素标签的元素。
         *
         */
        elements?: string[];
        /**
         * Limit to elements with any of these attributes.
         *
         * 限制为任何带有这些属性的元素。
         *
         */
        attributes?: string[];
    };
}

export const inputNamesRemoval: VersionChanges<InputNameRemovalUpgradeData> = {
    [TargetVersion.V16]: [
        {
            pr: '',
            changes: [
                {
                    remove: 'thyIconPrefix',
                    limitedTo: {
                        attributes: ['thyLabel', '[thyLabel]']
                    }
                },
                {
                    remove: 'thyBackgroundOpacity',
                    limitedTo: {
                        attributes: ['thyLabel', '[thyLabel]']
                    }
                },
                {
                    remove: 'thyTitle',
                    limitedTo: {
                        elements: ['thy-action-menu-divider']
                    }
                },
                {
                    remove: 'thyType',
                    limitedTo: {
                        elements: ['thy-action-menu-divider']
                    }
                },
                {
                    remove: 'thyTheme',
                    limitedTo: {
                        elements: ['thy-action-menu']
                    }
                }
            ]
        }
    ]
};
