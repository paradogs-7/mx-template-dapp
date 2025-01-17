import { TRANSACTIONS_ENDPOINT } from 'localConstants/sdkDappCoreConstants';
import { Label } from 'components/Label';
import { getTransactionUrl, useTransactionOutcome } from './helpers';
import { getState, useGetNetworkConfig } from 'lib/sdkDappCore';
import { ExplorerLink } from 'components/ExplorerLink';

export const Transaction = () => {
  const { walletAddress } = useGetNetworkConfig();
  const transactionUrl = getTransactionUrl(walletAddress);

  const txData = useTransactionOutcome();

  return (
    <div className='flex flex-col gap-2 text-sm'>
      <a
        href={transactionUrl}
        className='self-start inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white mr-0 border-solid border-blue-600 border-[1px]'
      >
        Send transaction
      </a>

      {txData.status && (
        <p>
          <Label>Transaction status:</Label> {txData.status}
        </p>
      )}
      {txData.address && (
        <p>
          <Label>Sender:</Label> {txData.address}
        </p>
      )}
      {txData.txHash && (
        <p>
          <Label>Hash:</Label>
          <ExplorerLink
            page={`/${TRANSACTIONS_ENDPOINT}/${txData.txHash}`}
            className='border-b border-dotted border-gray-500 hover:border-solid hover:border-gray-800'
          >
            {txData.txHash}
          </ExplorerLink>
        </p>
      )}
    </div>
  );
};
