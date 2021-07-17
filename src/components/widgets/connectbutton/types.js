
export const ConnectorNames = {
	  Injected : "injected",
	  WalletConnect : "walletconnect",
	  BSC : "bsc",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  connectorId: ConnectorNames;
}
