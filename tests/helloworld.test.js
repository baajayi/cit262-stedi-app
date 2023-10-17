import myName from "../utils/helloworld.mjs";


    it('should return the string "Bamidele"', () => {
      const name=myName();
      console.log(name);
      expect(name).toBe('Bamidele');
    });