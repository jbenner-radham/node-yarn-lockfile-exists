export interface YarnLockfileExistsConfig {
    cwd?: string;
}

export default function yarnLockfileExists(config?: YarnLockfileExistsConfig): boolean;
