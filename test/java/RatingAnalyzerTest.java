import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import com.ebayk.data.user.User;
import com.ebayk.data.user.UserRepository;
import com.ebayk.service.RatingAnalyzer;
import com.ebayk.service.RatingAnalyzer.UserNotFoundException;

@RunWith(PowerMockRunner.class)
@PrepareForTest(RatingAnalyzer.class)
public class RatingAnalyzerTest {
	
	@Mock
	UserRepository userRepository;
	
	@Mock
	User user;
	
	@Test
	public void testRatedUserForRatingCreatorNotNull() throws UserNotFoundException {
		Integer userId = 4000;
		PowerMockito.when(userRepository.getUser(userId)).thenReturn(user);
		List<User> ratedUsers = new ArrayList<User>();
		ratedUsers.add(user);
		PowerMockito.when(userRepository.getUsers()).thenReturn(ratedUsers);
		PowerMockito.mockStatic(RatingAnalyzer.class);
		PowerMockito.when(RatingAnalyzer.getRatedUserForRatingCreator(userId)).thenReturn(ratedUsers);
		PowerMockito.verifyStatic();
		assertNotNull(ratedUsers);
	}

}
