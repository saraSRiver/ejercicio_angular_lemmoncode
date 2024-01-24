import { ShowUsernamePipe } from './show-username.pipe';

describe('ShowUsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new ShowUsernamePipe();
    expect(pipe).toBeTruthy();
  });
});
