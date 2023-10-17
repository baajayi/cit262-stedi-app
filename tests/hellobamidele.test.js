import myName from "../utils/hellobamidele.mjs";


    it('should return the string "Bamidele"', () => {
      const name=myName();
      console.log(name);
      expect(name).toBe('Bamidele');
    });