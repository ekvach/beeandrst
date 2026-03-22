import { test as base, expect } from '@playwright/test';
import { UserDto } from '../dtos/UserDto';
import { getStandardUser } from '../providers';

type TestOptions = {
  user: UserDto;
};

export const test = base.extend<TestOptions>({
  user: [getStandardUser(), { option: true }], 
});

export { expect };