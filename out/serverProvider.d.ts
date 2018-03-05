import { Runtime } from './platform';
import ServiceDownloadProvider from './serviceDownloadProvider';
import { IConfig, ILogger } from './interfaces';
export default class ServerProvider {
    private config;
    private logger;
    private _downloadProvider;
    constructor(config: IConfig, logger: ILogger);
    /**
     * Public get method for downloadProvider
     */
    readonly downloadProvider: ServiceDownloadProvider;
    /**
     * Given a file path, returns the path to the SQL Tools service file.
     */
    findServerPath(filePath: string, executableFiles?: string[]): Promise<string>;
    /**
     * Download the service if doesn't exist and returns the file path.
     */
    getOrDownloadServer(runtime: Runtime): Promise<string>;
    /**
     * Returns the path of the installed service
     */
    getServerPath(runtime: Runtime): Promise<string>;
    /**
     * Downloads the service and returns the path of the installed service
     */
    downloadServerFiles(runtime: Runtime): Promise<string>;
}
