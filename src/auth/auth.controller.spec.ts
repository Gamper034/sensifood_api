// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { PrismaService } from '../prisma/prisma.service'; // Chemin relatif
// import { JwtService } from '@nestjs/jwt';

// describe('AuthController', () => {
//   let controller: AuthController;
//   let authService: AuthService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AuthController],
//       providers: [
//         AuthService,
//         PrismaService,
//         {
//           provide: JwtService,
//           useValue: {
//             sign: jest.fn().mockReturnValue('test_token'),
//           },
//         },
//       ],
//     }).compile();

//     controller = module.get<AuthController>(AuthController);
//     authService = module.get<AuthService>(AuthService);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   describe('register', () => {
//     it('should register a user', async () => {
//       const result = { 
//         id: 1, 
//         email: 'test@example.com', 
//         password: 'password', 
//         age: 30, 
//         name: 'John Doe', 
//         gender: 'male', 
//         encryptedId: 'encrypted_id' 
//       };
//       jest.spyOn(authService, 'register').mockImplementation(async () => result);

//       const response = await controller.register({ email: 'test@example.com', password: 'password' });
//       expect(response).toBe(result);
//       console.log('Register response:', response);
//     });
//   });

//   describe('login', () => {
//     it('should return an access token', async () => {
//       const result = { access_token: 'test_token' };
//       jest.spyOn(authService, 'login').mockImplementation(async () => result);

//       const response = await controller.login({ email: 'test@example.com', password: 'password' });
//       expect(response).toBe(result);
//       console.log('Login response:', response);
//     });
//   });
// });