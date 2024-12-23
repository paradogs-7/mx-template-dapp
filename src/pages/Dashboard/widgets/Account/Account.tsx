import { Label } from 'components/Label';
import { OutputContainer } from 'components/OutputContainer';
import { Username } from './components';
import { DataTestIdsEnum } from 'localConstants';
import { formatAmount } from 'lib/sdkDappUtils';
import { accountSelector } from 'lib/sdkDappCore';
import { useStore } from 'hooks/useStore';

export const Account = () => {
  const state = useStore();
  const account = accountSelector(state);

  if (!account.address) {
    return <></>;
  }

  return (
    <OutputContainer>
      <div className='flex flex-col text-black' data-testid='topInfo'>
        <p className='truncate'>
          <Label>Address: </Label>
          <span data-testid='accountAddress'> {account.address}</span>
        </p>

        <Username account={account} />
        <p>
          <Label>Shard: </Label> {account.shard}
        </p>

        <p>
          <Label>Balance: </Label>
          <span data-testid={DataTestIdsEnum.balance}>
            {formatAmount({
              input: account.balance
            })}
          </span>
        </p>
      </div>
    </OutputContainer>
  );
};
