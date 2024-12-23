import {
  faPaperPlane,
  faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { TransactionsOutput } from 'components/OutputContainer/components';
import { OutputContainer } from 'components/OutputContainer/OutputContainer';
import { useSendBatchTransaction } from 'hooks';
import { pendingTransactionsSelector } from 'lib/sdkDappCore';
import { useStore } from 'hooks/useStore';

export const BatchTransactions = () => {
  const { sendBatchTransaction, sendSwapAndLockBatchTransactions } =
    useSendBatchTransaction();

  const state = useStore();
  const transactions = pendingTransactionsSelector(state);
  const hasPendingTransactions = transactions.length > 0;

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col md:flex-row gap-2 items-start'>
        <Button
          data-testid='sign-auto-send'
          onClick={sendBatchTransaction}
          disabled={hasPendingTransactions}
        >
          <FontAwesomeIcon icon={faPaperPlane} className='mr-1' />
          Sign & send batch
        </Button>
        <Button
          data-testid='swap-lock'
          onClick={sendSwapAndLockBatchTransactions}
          disabled={hasPendingTransactions}
        >
          <FontAwesomeIcon icon={faArrowsRotate} className='mr-1' />
          Swap & Lock
        </Button>
      </div>

      <OutputContainer>
        <TransactionsOutput transactions={transactions} />
      </OutputContainer>
    </div>
  );
};
