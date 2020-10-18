### Usage

```js
import React from 'react';
import { CommentsProvider, useCommentsState } from 'apiContext';
import { Button } from 'components/ui';

const MyComponent = () => {
  const { getCurrencyById, updateRates } = useCommentsState();
  const euro = getCurrencyById('EUR');

  return (
    <div>
      <span>
        {`${euro.shortName} has now a value of ${euro.rate}$`}
      </span>
      <Button
        caption='Update Rates'
        onClick={updateRates}
      />
    </div>
  )
}

const MoneyExchange = () => (
  <CommentsProvider>
    <MyComponent />
  </CommentsProvider>
);
```
