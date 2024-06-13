import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { HelperService } from './helper.service';

@Global()
@Module({
	imports: [HttpModule],
	providers: [HelperService],
	exports: [HelperService]
})
export class HelperModule { }
