import { createServiceStub } from './create-service-stub';
import { DogsService } from '../Service/dogs.service';
import { of } from 'rxjs';

export const dogsServiceStub = createServiceStub(DogsService, {
 breedsChangeListener$: of(null),
 preparedAllBreeds() {},
});
